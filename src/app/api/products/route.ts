import { NextResponse } from "next/server";

const productsApiUrl = "http://localhost:3000/products";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const backendUrl = new URL(productsApiUrl);

  backendUrl.searchParams.set("page", requestUrl.searchParams.get("page") ?? "1");
  backendUrl.searchParams.set(
    "limit",
    requestUrl.searchParams.get("limit") ?? "10",
  );

  try {
    const response = await fetch(backendUrl, { cache: "no-store" });
    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Unable to load products right now." },
      { status: 502 },
    );
  }
}
