interface WaveProps extends React.SVGProps<SVGElement> {
  className?: string;
}

const Wave = ({ className }: WaveProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 1440 320'
    preserveAspectRatio='none'
    className={className}>
    <path
      fillOpacity='1'
      d='M0,96L40,128C80,160,160,224,240,250.7C320,277,400,267,480,229.3C560,192,640,128,720,128C800,128,880,192,960,192C1040,192,1120,128,1200,90.7C1280,53,1360,43,1400,37.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'></path>
  </svg>
);

export default Wave;
