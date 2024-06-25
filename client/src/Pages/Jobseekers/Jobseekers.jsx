import React, { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../Redux/userSlice";
import Loading from "../../Components/Loading";
import Usercard from "../../Components/Usercard";
import ReactPaginate from "react-paginate";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

const Jobseekers = () => {
  const dispatch = useDispatch();
  const { users, userStatus } = useSelector((state) => state.users);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [search, setSearch] = useState("");
  const [selectValue, setSelectValue] = useState("0");
  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");

  const handleMinAgeChange = (e) => {
    const value = Math.max(0, Math.min(70, e.target.value));
    setMinAge(value);
  };

  const handleMaxAgeChange = (e) => {
    const value = Math.max(0, Math.min(70, e.target.value));
    setMaxAge(value);
  };

  const handleResetFilters = () => {
    setSearch("");
    setSelectValue("0");
    setMinAge("");
    setMaxAge("");
  };

  const filteredElements = () => {
    let sorted;

    if (selectValue === "1") {
      sorted = users.toSorted((a, b) => a.name.localeCompare(b.name));
    } else if (selectValue === "2") {
      sorted = users.toSorted((a, b) => b.name.localeCompare(a.name));
    } else {
      sorted = [...users];
    }

    let filtered = sorted.filter(
      (item) =>
        item.name.toUpperCase().includes(search.toUpperCase()) ||
        item.job.toUpperCase().includes(search.toUpperCase())
    );

    if (minAge !== "" || maxAge !== "") {
      filtered = filtered.filter((item) => {
        const age = parseInt(item.age, 10);
        return (
          (!minAge || age >= parseInt(minAge, 10)) &&
          (!maxAge || age <= parseInt(maxAge, 10))
        );
      });
    }

    return filtered;
  };

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 15;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredElements().slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredElements().length / itemsPerPage);

  const handlePageClick = (selected) => {
    const newOffset = (selected * itemsPerPage) % filteredElements().length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="w-full min-h-screen">
      <div className="w-full flex items-center justify-center flex-col gap-4 py-4">
        <h1 className="text-3xl">İşaxtaranlar</h1>
        <button
          className="flex text-xl items-center gap-3"
          onClick={() => {
            setIsOpenFilter(!isOpenFilter);
          }}
        >
          <FaMagnifyingGlass size={17} /> Ətraflı axtarış
        </button>
        <div
          className={
            !isOpenFilter
              ? "hidden"
              : " w-[70%] min-h-36 border rounded p-2  py-6 flex flex-col items-center justify-center gap-5"
          }
        >
          <div className="flex flex-col lg:flex-row lg:justify-between w-[80%]">
            <div className="mb-4 lg:mb-0">
              <h1 className="pb-6 font-semibold"> Açar-kəlmələr ilə axtarış</h1>
              <input
                className="border p-1 rounded w-full lg:w-72"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                placeholder="Ad və ya ixtisas üzrə axtar..."
                type="text"
              />
            </div>
            <div className="mb-4 lg:mb-0">
              <h1 className="pb-6 font-semibold"> minimum yaş</h1>
              <input
                className="border p-1 rounded w-full lg:w-40"
                type="number"
                onChange={handleMinAgeChange}
                value={minAge}
                min="15"
                max="70"
              />
            </div>
            <div>
              <h1 className="pb-6 font-semibold"> maksimum yaş</h1>
              <input
                className="border p-1 rounded w-full lg:w-40"
                type="number"
                onChange={handleMaxAgeChange}
                value={maxAge}
                min="15"
                max="70"
              />
            </div>
          </div>


          <div className="w-[80%] flex justify-between py-4">
            <select
              className="border p-1 rounded w-72"
              name="sorting"
              onChange={(e) => setSelectValue(e.target.value)}
              value={selectValue}
            >
              <option value="0">Sırala</option>
              <option value="1">A-z</option>
              <option value="2">Z-a</option>
            </select>

            <button
              className="ml-4 border w-24 h-10 font-medium tracking-wide	 rounded bg-red-600 text-white border-none"
              onClick={handleResetFilters}
            >
              Təmizlə
            </button>
          </div>
        </div>
      </div>

      <div>
        {userStatus === "loading" ? (
          <Loading />
        ) : (
          <>
            <div className="flex flex-wrap w-full justify-center">
              {currentItems.map((item) => {
                return <Usercard key={item.id} props={item} />;
              })}
            </div>
            <div className="w-full justify-center items-center">
              <ReactPaginate
                className="paginateStyle"
                breakLabel="..."
                nextLabel={<MdOutlineNavigateNext />}
                onPageChange={({ selected }) => handlePageClick(selected)}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={<MdOutlineNavigateBefore />}
                renderOnZeroPageCount={null}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Jobseekers;
