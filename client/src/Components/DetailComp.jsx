const DetailComp = ({ userDetail }) => {
  return (
    <div>
      <div className="w-full h-32 flex items-center justify-center bg-slate-100">
        <div className="container">
          <h1 className="text-3xl mb-2">{userDetail.name}</h1>
          <h2 className="text-lg">{userDetail.job}</h2>
        </div>
      </div>
      <div className="w-full py-20 flex items-center justify-center">
        <div className="container">
          <h2 className="text-2xl mb-2">Haqqında</h2>
          <div className="flex md:flex-row flex-col-reverse">
            <div className="pr-4 md:w-2/3 md:pb-6 mt-6">
              <p>{userDetail.about}</p>
              <p>{userDetail.bday}</p>
            </div>
            <div className="md:h-[370px] flex flex-col gap-3 justify-between">
              <img className="w-40 lg:w-48" src={userDetail.avatar} alt="" />

              <div>
                <h2 className="text-xl my-1">Şəxsi məlumatları</h2>
                <div className="flex gap-2">
                  <div className="flex flex-col gap-2">
                    <p>
                      <b>Yaş:</b>
                    </p>
                    <p>
                      <b>Cins:</b>
                    </p>
                    <p>
                      <b>Mobil telefon:</b>
                    </p>
                    <p>
                      <b>E-mail:</b>
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>{userDetail.age}</p>
                    <p>{userDetail.gender}</p>
                    <p>{userDetail.number}</p>
                    <p>{userDetail.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
