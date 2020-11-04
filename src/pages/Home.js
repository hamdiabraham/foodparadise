import React, { Component } from "react";
import ImageAndWelcome from "../componets/ImageAndWelcome";
import CityList from "../componets/CityList";
import SearchCity from "../componets/SearchCity";
import axios from "axios";
import { API } from "../config/api";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      keyword: "",
      featuredCities: null,
      citiesResultSearch: null,
      cityKeywordSearch: "",
    };
  }

  changeKeywordHandler = (e) => {
    this.setState({ keyword: e.target.value });
  };

  searchHandler = () => {
    let keyword = this.state.keyword;
    var url = `${API.zomato.baseUrl}/cities`;
    axios
      .get(url, {
        headers: {
          "user-key": API.zomato.api_key,
        },
        params: {
          q: keyword,
        },
      })
      .then(({ data }) => {
        if (data.status === "success") {
          this.setState({
            citiesResultSearch: data.location_suggestions,
            keyword: "",
            cityKeywordSearch: keyword,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  getFeaturedCities = () => {
    var url = `${API.zomato.baseUrl}/cities`;
    axios
      .get(url, {
        headers: {
          "user-key": API.zomato.api_key,
        },
        params: {
          city_ids: "74,11052,170",
        },
      })
      .then(({ data }) => {
        if (data.status === "success") {
          this.setState({ featuredCities: data.location_suggestions });
        }
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getFeaturedCities();
  }

  render() {
    // const citiesDummy = [
    //   { id: 74, name: "Jakarta", country_name: "Indonesia" },
    //   { id: 11052, name: "Bandung", country_name: "Indonesia" },
    //   { id: 170, name: "Bali", country_name: "Indonesia" },
    // ];

    return (
      <div>
        <ImageAndWelcome />
        <div className="container" style={{ marginTop: 30, marginBottom: 30 }}>
          <CityList
            cities={this.state.featuredCities}
            title={"Featured Cities"}
          />
          <SearchCity
            value={this.state.keyword}
            onChange={this.changeKeywordHandler}
            onClickSearch={this.searchHandler}
          />
          {this.state.cityKeywordSearch !== "" && (
            <CityList
              title={"Search Result"}
              cities={this.state.citiesResultSearch}
              showSubtitle={true}
              subtitle={this.state.cityKeywordSearch}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Home;
