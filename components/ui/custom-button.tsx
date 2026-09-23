"use client"

import type { ComponentProps } from "react"
import { motion } from "motion/react"

import { Button } from "@/components/ui/button"

function CustomButton(props: ComponentProps<typeof Button>) {
  return (
    <motion.span
      className="inline-flex"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <Button {...props} />
    </motion.span>
  )
}

export { CustomButton }
