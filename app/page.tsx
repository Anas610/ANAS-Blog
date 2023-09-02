import Header from "./Components/header/page"
import Posts from "./posts/page";

export const metadata = {
  title: "Anas Blog"
};

export default function Home() {
  return (
    <>
      <Header />
      <Posts />
    </>
  )
}
