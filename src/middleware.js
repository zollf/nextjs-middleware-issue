import { NextRequest, NextResponse } from 'next/server';

export default function middleware(req) {
  const url = req.nextUrl.clone();
  const { locale, pathname } = req.nextUrl;

  return NextResponse.next({ status: 200 });
}