import { Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};
export default function Layout({ children }) {
  return (
    <>
      <Navbar></Navbar>
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.6, type: "easeInOut" }}
      >
        <Container maxW="full">{children}</Container>
        <Footer></Footer>
      </motion.main>
    </>
  );
}
