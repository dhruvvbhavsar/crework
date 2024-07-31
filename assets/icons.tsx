type IconProps = {
  size?: number;
  color?: string;
  className?: string;
  onClick?: () => void;
};

export const HomeIcon = ({ size = 24, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M2 7.99998L11.7317 3.13414C11.9006 3.04969 12.0994 3.04968 12.2683 3.13414L22 7.99998"
      stroke="#797979"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20 11V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V11"
      stroke="#797979"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const BoardsIcon = ({ size = 24, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 3.6V20.4C3 20.7314 3.26863 21 3.6 21H20.4C20.7314 21 21 20.7314 21 20.4V3.6C21 3.26863 20.7314 3 20.4 3H3.6C3.26863 3 3 3.26863 3 3.6Z"
      stroke="#797979"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 6V16"
      stroke="#797979"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10 6V9"
      stroke="#797979"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14 6V13"
      stroke="#797979"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18 6V11"
      stroke="#797979"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const SettingsIcon = ({ size = 24, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
      stroke="#797979"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.6224 10.3954L18.5247 7.7448L20 6L18 4L16.2647 5.48295L13.5578 4.36974L12.9353 2H10.981L10.3491 4.40113L7.70441 5.51596L6 4L4 6L5.45337 7.78885L4.3725 10.4463L2 11V13L4.40111 13.6555L5.51575 16.2997L4 18L6 20L7.79116 18.5403L10.397 19.6123L11 22H13L13.6045 19.6132L16.2551 18.5155C16.6969 18.8313 18 20 18 20L20 18L18.5159 16.2494L19.6139 13.598L21.9999 12.9772L22 11L19.6224 10.3954Z"
      stroke="#797979"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const TeamsIcon = ({ size = 24, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 20V19C1 15.134 4.13401 12 8 12C11.866 12 15 15.134 15 19V20"
      stroke="#797979"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M13 14C13 11.2386 15.2386 9 18 9C20.7614 9 23 11.2386 23 14V14.5"
      stroke="#797979"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z"
      stroke="#797979"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9Z"
      stroke="#797979"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const AnalyticsIcon = ({ size = 24, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 20H4V4"
      stroke="#797979"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4 16.5L12 9L15 12L19.5 7.5"
      stroke="#797979"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const PlusCircle = ({ size = 24, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.5 1.25C6.56294 1.25 1.75 6.06294 1.75 12C1.75 17.9371 6.56294 22.75 12.5 22.75C18.4371 22.75 23.25 17.9371 23.25 12C23.25 6.06294 18.4371 1.25 12.5 1.25ZM13.25 8C13.25 7.58579 12.9142 7.25 12.5 7.25C12.0858 7.25 11.75 7.58579 11.75 8V11.25H8.5C8.08579 11.25 7.75 11.5858 7.75 12C7.75 12.4142 8.08579 12.75 8.5 12.75H11.75V16C11.75 16.4142 12.0858 16.75 12.5 16.75C12.9142 16.75 13.25 16.4142 13.25 16V12.75H16.5C16.9142 12.75 17.25 12.4142 17.25 12C17.25 11.5858 16.9142 11.25 16.5 11.25H13.25V8Z"
      fill="white"
    />
  </svg>
);

export const DownloadIcon = ({ size = 24, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 41"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 33.8335H30"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.9998 7.1665V27.1665M19.9998 27.1665L25.8332 21.3332M19.9998 27.1665L14.1665 21.3332"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const SearchIcon = ({ size = 24, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 17L21 21"
      stroke="#797979"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 11C3 15.4183 6.58172 19 11 19C13.213 19 15.2161 18.1015 16.6644 16.6493C18.1077 15.2022 19 13.2053 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11Z"
      stroke="#797979"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const CalendarIcon = ({ size = 24, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 4V2M15 4V6M15 4H10.5M3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10H3Z"
      stroke="#797979"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 10V6C3 4.89543 3.89543 4 5 4H7"
      stroke="#797979"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7 2V6"
      stroke="#797979"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 10V6C21 4.89543 20.1046 4 19 4H18.5"
      stroke="#797979"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const StarIcon = ({ size = 24, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 15C12.8747 15 15 12.949 15 8C15 12.949 17.1104 15 22 15C17.1104 15 15 17.1104 15 22C15 17.1104 12.8747 15 8 15Z"
      stroke="#797979"
      stroke-width="1.5"
      stroke-linejoin="round"
    />
    <path
      d="M2 6.5C5.13376 6.5 6.5 5.18153 6.5 2C6.5 5.18153 7.85669 6.5 11 6.5C7.85669 6.5 6.5 7.85669 6.5 11C6.5 7.85669 5.13376 6.5 2 6.5Z"
      stroke="#797979"
      stroke-width="1.5"
      stroke-linejoin="round"
    />
  </svg>
);

export const FilterIcon = ({ size = 24, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.99951 3H19.9996C20.5519 3 20.9996 3.44764 20.9996 3.99987L20.9998 5.58569C20.9999 5.85097 20.8945 6.10538 20.7069 6.29295L14.2924 12.7071C14.1049 12.8946 13.9995 13.149 13.9995 13.4142V19.7192C13.9995 20.3698 13.3881 20.8472 12.757 20.6894L10.757 20.1894C10.3118 20.0781 9.99951 19.6781 9.99951 19.2192V13.4142C9.99951 13.149 9.89415 12.8946 9.70662 12.7071L3.2924 6.29289C3.10486 6.10536 2.99951 5.851 2.99951 5.58579V4C2.99951 3.44772 3.44722 3 3.99951 3Z"
      stroke="#797979"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const ShareIcon = ({ size = 24, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z"
      stroke="#797979"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"
      stroke="#797979"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z"
      stroke="#797979"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path d="M15.5 6.5L8.5 10.5" stroke="#797979" stroke-width="1.5" />
    <path d="M8.5 13.5L15.5 17.5" stroke="#797979" stroke-width="1.5" />
  </svg>
);

export const CircleHelp = ({ size = 24, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#080808"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 9.00001C9 5.49998 14.5 5.50001 14.5 9.00001C14.5 11.5 12 10.9999 12 13.9999"
      stroke="#080808"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 18.0099L12.01 17.9988"
      stroke="#080808"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const AlignIcon = ({ size = 24, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.75 5H11.75"
      stroke="#555555"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3.75 12H16.75"
      stroke="#555555"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3.75 19H21.75"
      stroke="#555555"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const PlusIcon = ({ size = 24, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.75 12H12.75M12.75 12H18.75M12.75 12V6M12.75 12V18"
      stroke="#E3E1E1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const ClockIcon = ({ size = 24, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 6V12H18"
      stroke="#606060"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#606060"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const BellDotIcon = ({ size = 24, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.1336 11C18.7155 16.3755 21 18 21 18H3C3 18 6 15.8667 6 8.4C6 6.70261 6.63214 5.07475 7.75736 3.87452C8.88258 2.67428 10.4087 2 12 2C12.3373 2 12.6717 2.0303 13 2.08949"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const LoaderDotIcon = ({ size = 24, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2V6"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 18V22"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22 12H18"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 12H2"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.9292 4.92896L7.75762 7.75738"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.2427 16.2427L19.0711 19.0711"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.0711 4.92896L16.2427 7.75738"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.75713 16.2427L4.92871 19.0711"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.5 9C21.9854 9 24 6.98527 24 4.5C24 2.01472 21.9854 0 19.5 0C17.0146 0 15 2.01472 15 4.5C15 6.98527 17.0146 9 19.5 9Z"
      fill="#FFB800"
    />
  </svg>
);

export const RightArrows = ({ size = 24, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 6L19 12L13 18"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5 6L11 12L5 18"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const Eye = ({ size = 24, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 13C6.6 5 17.4 5 21 13"
      stroke="#999999"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 17C10.3431 17 9 15.6569 9 14C9 12.3431 10.3431 11 12 11C13.6569 11 15 12.3431 15 14C15 15.6569 13.6569 17 12 17Z"
      stroke="#999999"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const EyeOff = ({ size = 24, className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#999999"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
    <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
    <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
    <path d="m2 2 20 20" />
  </svg>
);

export const TrashIcon = ({ size = 24, className, onClick }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#999999"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    onClick={onClick}
  >
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    <line x1="10" x2="10" y1="11" y2="17" />
    <line x1="14" x2="14" y1="11" y2="17" />
  </svg>
);

export const X = ({ size = 24, className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#999999"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path
      d="M6.7583 17.2426L12.0009 12M12.0009 12L17.2435 6.75732M12.0009 12L6.7583 6.75732M12.0009 12L17.2435 17.2426"
      stroke="#797979"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const Maximise = ({ size = 24, className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#999999"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path
      d="M9.75 9.75L18 18M18 18V10.08M18 18H10.08"
      stroke="#797979"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.25 14.25L6 6M6 6V13.92M6 6H13.92"
      stroke="#797979"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const LoaderIcon = ({ size = 24, className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#999999"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path
      d="M12 2V6"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 18V22"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22 12H18"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 12H2"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.9292 4.92896L7.75762 7.75738"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.2427 16.2427L19.0711 19.0711"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.0711 4.92896L16.2427 7.75738"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.75713 16.2427L4.92871 19.0711"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const PriorityIcon = ({ size = 24, className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#999999"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <g clip-path="url(#clip0_42_503)">
      <path
        d="M11.5757 1.42427C11.81 1.18996 12.1899 1.18996 12.4243 1.42427L22.5757 11.5757C22.81 11.81 22.8101 12.1899 22.5757 12.4243L12.4243 22.5757C12.19 22.81 11.8101 22.8101 11.5757 22.5757L1.42427 12.4243C1.18996 12.19 1.18996 11.8101 1.42427 11.5757L11.5757 1.42427Z"
        stroke="#666666"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 8V12"
        stroke="#666666"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 16.0099L12.01 15.9988"
        stroke="#666666"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_42_503">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const PencilIcon = ({ size = 24, className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#999999"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path
      d="M14.3631 5.65147L15.843 4.17148C16.6241 3.39043 17.8904 3.39043 18.6715 4.17148L20.0857 5.5857C20.8667 6.36674 20.8667 7.63307 20.0857 8.41412L18.6057 9.89411M14.3631 5.65147L4.74742 15.2671C4.41535 15.5992 4.21072 16.0375 4.1694 16.5053L3.92731 19.2458C3.87254 19.8658 4.39141 20.3847 5.01143 20.3299L7.75184 20.0878C8.21965 20.0465 8.658 19.8418 8.99007 19.5098L18.6057 9.89411M14.3631 5.65147L18.6057 9.89411"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
