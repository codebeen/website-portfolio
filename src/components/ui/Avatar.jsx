import avatar from "../../assets/avatar.png"

export const Avatar = () => {
    return (
        <div
            className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full ring-2 ring-blue-500/30 ring-offset-2 ring-offset-black sm:h-32 sm:w-32 md:h-45 md:w-45"
            data-aos="fade-up"
        >
            <img src={avatar} alt="" className="h-full w-full object-cover" />
        </div>
    );
};
