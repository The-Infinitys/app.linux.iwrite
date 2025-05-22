import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import MiddleBox from "@/app/components/MiddleBox";
import LeftMenu from "@/app/components/LeftMenu";
import RightMenu from "@/app/components/RightMenu";
import MainMenu from "@/app/components/MainMenu";
export default function IWrite() {
  return (
    <>
      <Header />
      <MiddleBox>
        <LeftMenu />
        <MainMenu />
        <RightMenu />
      </MiddleBox>
      <Footer />
    </>
  );
}
