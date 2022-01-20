import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

function ListJob({role, title}) {
  const [listJob, setListJob] = useState([]);

  const [perPage, setPerPage] = useState({
    min: 0,
    max: 5,
    limit: 10,
  });
  // var newarr = listJob.slice().reverse();
  // console.log("check", newarr);
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`${process.env.REACT_APP_API_URL}/job`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setListJob(data.data.filter((job) => job.expired === false));
        }
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <main>
      <section className="py-10 ">
        <div className="container">
          <div className="text-center mb-6">
            <h2 className="text-2xl mb-4 font-bold">
              Available <span className="text-indigo-600">Jobs</span> For You
            </h2>
            <p>
              Post a job to tell us about your project. We'll quickly match you
              with the right freelancers.
            </p>
          </div>

          <div className="flex">
            {/* <div className="md:w-1/4 w-full"></div> */}
            <div className="w-full">
              <div className="p-6 ml-6">
                {listJob.length > 0 &&
                  [...listJob].reverse().map((job, index) => {
                    // show to 10 job per page
                    return (
                      index < perPage.max &&
                      index >= perPage.min && (
                        <Link to={`/job/${job.job_id}`} key={index}>
                          <div className=" menu-func-recruiter p-3 mb-6 shadow-md rounded-lg bg-gray-100 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-red-500  hover:text-white duration-300">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <img
                                  src={job.logo_url}
                                  alt=""
                                  className="max-w-[80px] h-auo"
                                />
                              </div>
                              <div>
                                <h4
                                  title={job.job_title}
                                  // limit the length of character
                                >
                                  {/* {job.job_title.length > 20
                                    ? job.job_title.substring(0, 20) + "..."
                                    : job.job_title} */}
                                  {job.job_title}
                                </h4>
                                <p
                                  className="font-bold"
                                  title={job.company_name}
                                >
                                  {job.company_name}
                                </p>
                                <ul className="flex items-center">
                                  <li className="p-5 pl-0">
                                    <span className="flex items-center">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                      </svg>
                                      <span className="ml-2" title="Place">
                                        {job.job_place}
                                      </span>
                                    </span>
                                  </li>
                                  <li className="p-5">
                                    <span className="flex items-center">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                      </svg>
                                      <span className="ml-2" title="Salary">
                                        {job.salary}$
                                      </span>
                                    </span>
                                  </li>
                                  <li className="p-5">
                                    <span className="flex items-center">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                      </svg>
                                      <span
                                        className="ml-2"
                                        title="Date expire"
                                      >
                                        {
                                          // format date
                                          new Date(
                                            job.date_expire
                                          ).toLocaleDateString("vi-VN")
                                        }
                                      </span>
                                    </span>
                                  </li>
                                  <li className="p-5">
                                    <span className="flex items-center">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                      </svg>
                                      <span title="Work time" className="ml-2">
                                        {job.work_time === "f"
                                          ? "Full time"
                                          : "Part time"}
                                      </span>
                                    </span>
                                  </li>
                                </ul>
                              </div>
                              <ul>
                                <li className="p-5 pb-0">
                                  <span className="flex items-center">
                                    {/* <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-4 w-4"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                    </svg> */}
                                    {/* <span title="Work time" className="ml-2">
                                      {job.work_time === "f"
                                        ? "Full time"
                                        : "Part time"}
                                    </span> */}
                                  </span>
                                </li>
                                <li className="p-5">
                                  <span className="flex items-center hover:translate-x-3 transition-all duration-300 hover:text-prihover">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-4 w-4"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                      />
                                    </svg>
                                    <span className="ml-2">
                                      {role !== 1 ? "Apply Now" : "See Detail"}
                                    </span>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Link>
                      )
                    );
                  })}
                {listJob.length > 1 && (
                  <nav>
                    <ul className="w-full flex justify-center">
                      {
                        // pagination follow per page
                        listJob.map((job, index) => {
                          let page = Math.floor(index / perPage.limit) + 1;
                          return (
                            index % perPage.limit === 0 && (
                              <li key={index} className="m-2">
                                <button
                                  className="inline-block p-3 rounded-lg text-white bg-blue-500"
                                  onClick={() => {
                                    setPerPage((prev) => ({
                                      ...prev,
                                      min: (page - 1) * perPage.limit,
                                      max: page * perPage.limit,
                                    }));
                                    window.scrollTo(0, 0);
                                  }}
                                >
                                  {page}
                                </button>
                              </li>
                            )
                          );
                        })
                      }
                    </ul>
                  </nav>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ListJob;
