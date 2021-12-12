export const IoMdCheckmark = () => {
  return (
    <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.99988 6.039L6.17908 10.218L14.8031 1.59497" stroke="#B2B2B3" strokeWidth="3" />
    </svg>
  );
};

interface ArrowProps {
  className?: string;
}

export const MdOutlineArrowRightAlt = ({ className }: ArrowProps) => {
  return (
    <svg
      width="26"
      height="13"
      viewBox="0 0 26 13"
      fill="current"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M17.958 4.29507H1.31398C1.1384 4.29507 0.970022 4.36481 0.845873 4.48896C0.721724 4.61311 0.651978 4.7815 0.651978 4.95707L0.651978 8.04408C0.651978 8.21965 0.721724 8.38802 0.845873 8.51217C0.970022 8.63632 1.1384 8.70608 1.31398 8.70608H17.958V11.2451C17.9578 11.5069 18.0353 11.7629 18.1806 11.9806C18.326 12.1984 18.5327 12.3681 18.7746 12.4683C19.0164 12.5685 19.2826 12.5947 19.5394 12.5436C19.7961 12.4925 20.0319 12.3663 20.217 12.1811L24.961 7.43707C25.2091 7.18896 25.3485 6.85245 25.3485 6.50157C25.3485 6.15069 25.2091 5.81419 24.961 5.56608L20.217 0.822077C20.0319 0.636851 19.7961 0.510689 19.5394 0.459558C19.2826 0.408428 19.0164 0.434628 18.7746 0.534845C18.5327 0.635062 18.326 0.804782 18.1806 1.02253C18.0353 1.24028 17.9578 1.49626 17.958 1.75807V4.29507Z"
        fill="current"
      />
    </svg>
  );
};

interface BiChevronDownProps {
  className: string;
}

export const BiChevronDown = ({ className }: BiChevronDownProps) => {
  return (
    <svg
      width="17"
      height="11"
      viewBox="0 0 17 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M2.02502 1.0918L8.84094 7.90796L15.6571 1.0918" stroke="white" strokeWidth="3" />
    </svg>
  );
};
