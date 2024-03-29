import Button from "@/components/ui/Button/Button";
import CheckMark from "@/components/ui/CheckMark/CheckMark";
import Container from "@/components/ui/Container";
import { getServices } from "@/api/admin/services/service.api";
import { useQuery } from "@tanstack/react-query";
import "animate.css";

interface PlanDetail {
  id: string;
  text: string;
}

interface Plan {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plans: any;
  "plans-id": string;
  header: string;
  title: string;
  price: string;
  details: PlanDetail[];
  text: string;
}

const Pricing = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["plans"],
    queryFn: getServices,
  });
  if (isLoading) {
    return <p>loading...</p>;
  }
  return (
    <Container className="animate__animated animate__bounceInLeft">
      <div>
        <div className="text-center space-y-6 py-32 ">
          <p className="text-5xl font-bold ">Explore our pricing plans</p>
          <p className="text-xs mx-auto max-w-[800px]">
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
            posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
          </p>
        </div>
        {/* card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[32px]">
          {data ? (
            data[0].plans.map((plan: Plan) => (
              <div key={plan["plans-id"]}>
                <div className="border rounded-md hover:bg-[#EA9B00] shadow-xl">
                  <div className="px-5 py-5">
                    <h1 className="font-semibold text-lg pb-[20px]">
                      {plan.header}
                    </h1>
                    <p className="text-sm max-w-[250px] pb-[20px]">
                      {plan.title}
                    </p>
                    <p className="font-bold text-[48px] pb-[20px]">
                      <span className="text-[40px]">$</span>
                      {plan.price}
                    </p>
                    <Button className="p-2 mb-5 w-full bg-">
                      Get this package
                    </Button>
                    <ol className="font-semibold text-[12px] pb-[40px] space-y-2">
                      {plan.details.map((detail) => (
                        <div className="flex gap-2" key={detail.id}>
                          <CheckMark children={undefined} />
                          <li>{detail.text}</li>
                        </div>
                      ))}
                    </ol>
                  </div>
                </div>
                <button className="w-full border py-3 bg-[#F2F2F2] hover:bg-gradient-to-r from-amber-400 to-amber-600 p-4 text-black cursor-pointer duration-300 ease-in-out px-10 py-2">
                  See all features
                </button>
              </div>
            ))
          ) : (
            <p className="text-center items-center">Loading...</p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Pricing;
