import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() { // HoC stands For Higher Order Component which is allow us for wrap and margin center 
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}//amount means seconds
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          {/* idName call 'about' from About.jsx */}
          &nbsp;

        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
// hoc means Higher Order Component which is wrap and margin equally
