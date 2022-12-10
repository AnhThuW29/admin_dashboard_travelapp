import React, { useEffect, useState } from "react";
import SideBar from "../../components/sidebar/SideBar.jsx";
import {
  SelectProvince,
  SelectDistrict,
  SelectCommune,
  getProvinceName,
  getDistrictName,
  getCommuneName,
} from "vn-ad";
import axiosClient from "Data/client.js";
import { useTabs } from "@mui/base";
import { useParams } from "react-router-dom";
import axios from "axios";

const ChinhSuaTour = () => {
  let id = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const getUser = async (id) => {
      try {
        await axiosClient.get("/v1/tour/getone/" + id).then((res) => {
          setData(res.data);
          console.log("HHHHHHHHH", res.data);
        });
      } catch (error) {
        console.log("LOI", error);
      }
    };
    getUser(id.ID);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    await axios
      .put("http://localhost:9000/v1/tour/update", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("SAI: ", err);
      });
  };
  return (
    <div className="App">
      <div className="AppBackground">
        <SideBar />

        <div className="ml-44 m-auto">
          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="mt-5 md:col-span-2 md:mt-0">
                <form>
                  <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="bg-white px-4 py-5 sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-12">
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Tiêu đề
                          </label>
                          <input
                            value={data.TieuDe}
                            onChange={(e) =>
                              setData({ ...data, TieuDe: e.target.value })
                            }
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring-red-400 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-12">
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Mô tả
                          </label>
                          <input
                            value={data.MoTa}
                            onChange={(e) =>
                              setData({ ...data, MoTa: e.target.value })
                            }
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring-red-400 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-12">
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Địa điểm
                          </label>
                          <input
                            value={data.DiaDiem}
                            onChange={(e) =>
                              setData({ ...data, DiaDiem: e.target.value })
                            }
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring-red-400 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-12">
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Thành phố
                          </label>
                          <input
                            value={data.ThanhPho}
                            onChange={(e) =>
                              setData({ ...data, ThanhPho: e.target.value })
                            }
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring-red-400 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-12">
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Người hướng dẫn
                          </label>
                          <input
                            value={data.NguoiHuongDan}
                            onChange={(e) =>
                              setData({
                                ...data,
                                NguoiHuongDan: e.target.value,
                              })
                            }
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring-red-400 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-12">
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Lịch trình
                          </label>
                          <input
                            value={data.LichTrinh}
                            onChange={(e) =>
                              setData({ ...data, LichTrinh: e.target.value })
                            }
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring-red-400 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-6">
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Số ngày
                          </label>
                          <input
                            value={data.SoNgay}
                            onChange={(e) =>
                              setData({ ...data, SoNgay: e.target.value })
                            }
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring-red-400 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-6">
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Giá
                          </label>
                          <input
                            value={data.Gia}
                            onChange={(e) =>
                              setData({ ...data, Gia: e.target.value })
                            }
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring-red-400 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                      <button
                        // type="submit"
                        onClick={(e) => handleSubmit(e)}
                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                      >
                        Lưu
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChinhSuaTour;
