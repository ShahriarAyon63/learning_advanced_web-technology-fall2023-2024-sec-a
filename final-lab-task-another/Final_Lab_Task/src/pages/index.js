// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Crab Farming Money Transaction System</h1>
      <Link href="/bill-payment">
        <a>Go to Bill Payment</a>
      </Link>
    </div>
  );
}
