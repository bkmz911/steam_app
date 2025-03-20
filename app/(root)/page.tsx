import { WelcomeBlock, ProfileBlock } from "@/components/shared";

export default function Home() {
    return (
        <>
            <WelcomeBlock />
            <div className="h-6 bg-[#191c21] mt-[50px]"></div>
            <ProfileBlock />
            <section className="mt-[15px] xl:mt-[35px] xl:flex xl:justify-between xl:items-center xl:mx-[90px]">

                    <div className="subend_filter_basket">
                        <span className="subend_filter_basket_span_1">Всего в инвентаре по CS:GO найдено <span className="subend_filter_basket_span_2">1090</span> скинов ( <span className="subend_filter_basket_span_2">500</span> платные):</span>
                    </div>

                    <div className="desktop_filter">
                        <div className="sub_filter">
                            <div className="sub_filter_card">
                                <span className="sub_filter_card_span">Все</span>
                                <svg className="sub_filter_card_svg" width="10" height="10" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5575 0.442505L5 3.8775L8.4425 0.442505L9.5 1.5L5 6L0.5 1.5L1.5575 0.442505Z" fill="white"/>
                                </svg>                        
                            </div>
                            <div className="sub_filter_card">
                                <span className="sub_filter_card_span">Все</span>
                                <svg className="sub_filter_card_svg" width="10" height="10" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5575 0.442505L5 3.8775L8.4425 0.442505L9.5 1.5L5 6L0.5 1.5L1.5575 0.442505Z" fill="white"/>
                                </svg>                        
                            </div>
                        </div>
            
                        <div className="sub_filter">
                            <div className="sub_filter_card">
                                <span className="sub_filter_card_span">Сетка</span>
                                <svg className="sub_filter_card_svg" width="10" height="10" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5575 0.442505L5 3.8775L8.4425 0.442505L9.5 1.5L5 6L0.5 1.5L1.5575 0.442505Z" fill="white"/>
                                </svg>                        
                            </div>
                            <div className="sub_filter_card">
                                <span className="sub_filter_card_span">Одиночный</span>
                                <svg className="sub_filter_card_svg" width="10" height="10" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5575 0.442505L5 3.8775L8.4425 0.442505L9.5 1.5L5 6L0.5 1.5L1.5575 0.442505Z" fill="white"/>
                                </svg>                        
                            </div>
                        </div>
                    </div>
                    </section>
        </>
    );
}
