import { Header } from "../../components/Header";
import "./NotFound.css";

export function NotFound({ cart }) {
  return (
    <>
      <Header cart={cart} />
      <div className="not-found">
        <h1>Page not found</h1>
        <p>The page you’re looking for doesn’t exist.</p>
      </div>
    </>
  );
}
