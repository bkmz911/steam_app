interface API_types {
    id: string;
    name: string;
    avatar: string;
    price: number;
    discountPrice: number;
}

const API_URL = "https://838be371-7e4f-4e4b-9b8c-b88c07fc4baf.mock.pstmn.io";

export const fetchData = async () => {
    const response = await fetch(`${API_URL}/items`, {
            next: { revalidate: 3600 },
        }),
        data = await response.json();
    return data;
};

export async function DataBlock() {
    const data = await fetchData();
    return (
        <div className="flex items-center justify-center flex-wrap gap-2 2xl:gap-[20px] mx-4 2xl:mx-[100px]">
            {data.map((item: API_types) => {
                return (
                    <div
                        key={item.id}
                        className="w-[167px] 2xl:w-[270px] h-[288px] rounded-lg mt-[20px]"
                    >
                        <img
                            src={item.avatar}
                            className="mx-auto w-full h-[178px] rounded-t-lg"
                            alt="avatar"
                        />
                        <div className="w-[167px] 2xl:w-[270px] h-[70px] 2xl:h-[110px] bg-[#404245] rounded-b-lg">
                            <span className="text-[13px] 2xl:text-[20px] text-white block text-center pt-[10px] font-medium tracking-wide">
                                {item.name}
                            </span>
                            <div className="flex justify-between pt-[18px] px-[10px] 2xl:px-[16px]">
                                <span className="text-[#4daefc] text-[14px] 2xl:text-[20px] font-semibold;">
                                    ₽ {item.discountPrice}
                                </span>
                                <span className="text-white text-[14px] 2xl:text-[20px] font-semibold;">
                                    ₽ {item.price}
                                </span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
