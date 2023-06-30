interface TimelineProps {
  title: string;
  subtitle: string;
  startTime: string;
  endTime: string;
}

export default function Timeline({
  title,
  subtitle,
  startTime,
  endTime,
}: TimelineProps) {
  return (
    <div className="flex items-center space-x-10">
      <div className="w-4 h-4 rounded-full ring-dark ring-4 bg-dark ring-offset-2 ring-offset-gray-200 hover:bg-gray-200 transition-all cursor-pointer"></div>
      <div className="flex flex-col">
        <h4>{title}</h4>
        <h5 className="text-sm text-gray-300">{subtitle}</h5>
      </div>
      <div className="absolute -left-32 text-sm text-gray-300 flex flex-col items-center">
        <h6>{endTime}</h6>
        <h6>ㅣ</h6>
        <h6>{startTime}</h6>
      </div>
    </div>
  );
}
