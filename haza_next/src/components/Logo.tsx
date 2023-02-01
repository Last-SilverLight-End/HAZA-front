/**
 * 로고
 */

import Image from "next/image"

export function Logo(props = {className: ""}) {
  return (
    <Image src="/images/logo.png" alt="logo" width={512} height={512} className={props.className} />
  )
}