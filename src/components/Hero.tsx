import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="bg-gray-100 text-center">
      <Spline scene="./scene.splinecode" />
    </section>
  );
}