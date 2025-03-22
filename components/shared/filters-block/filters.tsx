import { DescriptionPart, MainFiltersPart } from "@/components/shared";
export const FiltersBlock = () => {
    return (
        <section className="mt-[15px] xl:mt-[35px] xl:flex xl:justify-between xl:items-center mx-4 2xl:mx-[100px]">
            <DescriptionPart />
            <MainFiltersPart />
        </section>
    );
};
