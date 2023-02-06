/**
 * 로고
 */
/**
 * 공백 텍스트
 * @param props 
 * @returns 
 */

import Image from "next/image"

export function Logo(props = {className: "", width : 50, height : 50}) {
  return (

      <Image src="/images/logo.png" alt="logo" width={props.width} height={props.height} className={props.className} />

  )
}