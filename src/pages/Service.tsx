import { useTypeQuery } from '../api/fetch';
import ServicesTable from '../components/Tables/ServicesTable';
const Service = () => {
  const { data: type } = useTypeQuery();
  return (
    <div
      id="about"
      className="mx-auto max-w-[1440px] lg:px-0 px-4 min-h-screen  justify-between items-center lg:py-24 py-12 w-full"
    >
      {type &&
        type.data
          ?.filter((item: any) => item.visibility)
          .map((item: any, index: number) => {
            return (
              <div className="flex flex-col gap-2 my-6" key={index}>
                <h2 className="font-semibold text-black dark:text-white">
                  {item.name}
                </h2>
                <ServicesTable typeId={item.id} />
              </div>
            );
          })}
    </div>
  );
};

export default Service;
