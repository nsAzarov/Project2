import React from 'react'
import styled from 'styled-components'
import { textColor } from '../../variables'

const LogoImgSC = styled.div`
  margin: 2px 20px;
`

const LogoImg = () => {
  return (
    <LogoImgSC>
      <svg
        width='40'
        height='50'
        viewBox='0 0 332 426'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M11.6588 420.895C13.8785 405.111 17.1339 370.879 44.9531 360.225C79.7271 346.908 127.079 349.127 141.136 338.769C146.787 334.605 152.235 307.694 141.136 287.718C137.026 280.319 100.444 249.244 93.7847 211.511C91.0428 195.974 67.1493 194.494 67.1493 167.859C67.1493 149.329 78.2473 149.275 85.6461 149.275C85.6461 145.576 67.1493 134.391 67.1493 115.981C67.1493 74.6207 121.9 53.8155 183.309 65.7562C209.945 70.9353 235.817 67.1724 266.915 56.1379C279.054 51.8304 266.915 78.9872 251.377 93.0448L238.06 105.709C260.996 121.987 249.158 153.061 249.158 153.061C249.158 153.061 261.736 141.963 266.915 162.679C272.094 183.396 252.857 199.673 243.979 199.673C235.1 199.673 238.06 224.742 227.702 244.718C219.457 260.619 198.846 281.799 193.667 287.718C189.282 292.729 182.569 333.59 193.667 338.769C202.546 342.912 221.783 343.948 258.776 355.046C295.77 366.144 326.844 369.844 326.844 420.895'
          stroke={textColor}
          stroke-width='10'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M137.307 173.375C131.863 165.933 129.399 154.166 137.307 142.121C151.017 121.236 182.157 124.957 191.742 142.121C199.827 156.6 188.112 171.887 175.411 182.305C163.935 191.717 157.266 209.094 162.71 228.441'
          stroke={textColor}
          stroke-width='10'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <circle cx='169.5' cy='250.5' r='7.5' fill={textColor} />
        <path
          d='M60.4904 5H5V64.9296M85.6461 5H110.062M140.397 5H190.708M215.864 5H241.019M269.134 5H322.405V64.9296M322.405 90.8252V109.322M322.405 139.657V191.448M322.405 218.823V244.719M322.405 266.915V322.405H269.134M241.019 322.405H215.864M110.062 322.405H85.6461M60.4904 322.405H5V266.915M5 244.719V218.823M5 191.448V139.657M5 109.322V90.8252'
          stroke={textColor}
          stroke-width='10'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </LogoImgSC>
  )
}

export default LogoImg
