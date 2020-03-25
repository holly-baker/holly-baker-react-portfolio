import React, { Component } from "react";
import axios from "axios";

// id: 14225
// name: "DashTrack"
// description: "Speedy tracks for your Dash"
// url: "https://www.dashtrack.com"
// category: "eCommerce"
// position: 2
// thumb_image_url: "https://devcamp-space.s3.amazonaws.com/PQK9d7CmhhdjymF1u4wJ5uiq?response-content-disposition=inline%3B%20filename%3D%22dashtrack.jpg%22%3B%20filename%2A%3DUTF-8%27%27dashtrack.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20200324%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200324T041909Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=5c635e29f9646d744b258a7908a4668e24c417fe1bb695bce5592a8b5222b3e5"
// banner_image_url: "https://devcamp-space.s3.amazonaws.com/NC2UZkBr1DGrJ3x2s94CqjtQ?response-content-disposition=inline%3B%20filename%3D%22dashtrack.jpg%22%3B%20filename%2A%3DUTF-8%27%27dashtrack.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20200324%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200324T041909Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=b4c664f781b56d88663ac38ac705a95fa9a609a5b64aceccdf6469ca762570a8"
// logo_url: "https://devcamp-space.s3.amazonaws.com/TenKQvrmFoXA6UUfCxRy3ByD?response-content-disposition=inline%3B%20filename%3D%22dashtrack.png%22%3B%20filename%2A%3DUTF-8%27%27dashtrack.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20200324%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200324T041909Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=1e9bbc6692aacb5aeee0a14227f08ef3d6accb9cf305fa7849ac7de8189849af"


export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
        portfolioItem: {}
    }
  }
  

  componentWillMount() {
    this.getPortfolioItem();
  }

  getPortfolioItem() {
    axios
      .get(
        `https://hollybaker.devcamp.space/portfolio/portfolio_items/${
          this.props.match.params.slug
        }`,
        { withCredentials: true }
      )
      .then(response => {
        this.setState({
            portfolioItem: response.data.portfolio_item
        });
      })
      .catch(error => {
        console.log("getportfolioitem error", error);
      });
  }

  render() {
      const {
        name,
        description,
        url,
        category,
        thumb_image_url,
        banner_image_url,
        logo_url
      } = this.state.portfolioItem;

      const bannerStyles = {
          backgroundImage: "url(" + banner_image_url + ")",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center"
      };

      const logoStyles = {
          width: "200px"
      }

    return (
     <div className="portfolio-detail-wrapper">
         <div className="banner" style={bannerStyles}>
             <img src={logo_url} style={logoStyles}/> 
         </div>

         <div className="portfolio-detail-description-wrapper">
             <div className="description">
                 {description}
             </div>
         </div>

         <div className="bottom-content-wrapper">
             <a href={url} className="site-link" target="_blank">
                 Visit {name}
             </a>
         </div>
     </div>
    );
  }
}