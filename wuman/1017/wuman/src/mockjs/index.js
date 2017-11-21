import slide from './data/slide.js';
import axios from 'axios';
import Mockadpter from 'axios-mock-adapter';
import video from './data/video';
import cityList from './data/city';
const Mock = require('mockjs');
export const slideMock = Mock.mock(slide);

export default {
    boostap () {
        const mock = new Mockadpter(axios);
        mock.onGet('/getVideoInfo').reply((config) => {
            let vid = config.params.vid;
            let nData = video.videoList.filter((v) => {
                if (v.vid === Number(vid)) {
                    return v;
                };
            });
            return new Promise((resolve, reject) => {
                resolve([200, nData]);
            });
        });
        // 城市接口
        mock.onGet('/getCityList').reply((config) => {
            return new Promise((resolve, reject) => {
                resolve([200, cityList]);
            });
        });
        // 登录接口
        mock.onPost('/register').reply((config) => {
            let username = JSON.parse(config.data).username;
            return new Promise((resolve, reject) => {
                resolve([200, {code: 0, username: username}]);
            });
        });
    }
};
