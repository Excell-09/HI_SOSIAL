export default function ProfileTesti({ userImage, username, jobtitle }) {
  return (
    <div className="relative flex-1 overflow-hidden max-w-max gradient-img-testi rounded-xl hidden sm:block">
      <div className="relative">
        <img
          src={userImage}
          alt="patner"
          width={"180px"}
          height={"200px"}
          className="object-contain"
        />
        <div className="gradient-img-testi absolute w-full h-full top-0 left-0"></div>
      </div>
      <div className="absolute bottom-2 w-full z-30">
        <h1 className="font-semibold text-sm text-center text-white">
          {username}
        </h1>
        <p className="text-xs font-light text-center text-white"> {jobtitle}</p>
      </div>
    </div>
  );
}
