import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'

function getStripe() {
  const secretKey = process.env.STRIPE_SECRET_KEY
  if (!secretKey) {
    throw new Error('STRIPE_SECRET_KEY ortam degiskeni ayarlanmamis')
  }
  return new Stripe(secretKey, {
    apiVersion: '2026-10-28.endive',
  })
}

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

export async function POST(request: Request) {
  const body = await request.text()
  const signature = headers().get('stripe-signature') as string

  let event: Stripe.Event

  try {
    const stripe = getStripe()
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret as string)
  } catch (err: any) {
    console.error(`Webhook signature verification failed: ${err.message}`)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      console.log('Checkout session completed:', session.id)
      // Sipariş kaydı, envanter güncellemesi, müşteri bildirimi buraya eklenebilir
      break
    }
    case 'payment_intent.succeeded': {
      const paymentIntent = event.data.object as Stripe.PaymentIntent
      console.log('Payment intent succeeded:', paymentIntent.id)
      break
    }
    case 'payment_intent.payment_failed': {
      const paymentIntent = event.data.object as Stripe.PaymentIntent
      console.log('Payment intent failed:', paymentIntent.id)
      break
    }
    default:
      console.log(`Unhandled event type: ${event.type}`)
  }

  return NextResponse.json({ received: true }, { status: 200 })
}
