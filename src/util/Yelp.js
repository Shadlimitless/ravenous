const apiKey = 'izCIdr-UHNuh27UumoKY-6HrjVrvtUM7o6hi9dPhd5dZk-7zWX_3j7wzp4JTJ0yE6b8FRmN1QmQ3bUegOXHKGjqZd3e1kNnhWU9la8bVZuhR7S0u6uU2Y07HykOcXnYx';
export const Yelp = {
    search (term, location, sortBy) {
        const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
        return fetch(
            url, {headers:{
                Authorization:`Bearer ${apiKey}`}}
        ).then(response => {
            return response.json();  
        }).then(jsonResponse=> {
            if(jsonResponse.hasOwnProperty('businesses')){
                return jsonResponse.businesses.map(business=>{
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        url: business.url,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].alias,
                        rating: business.rating,
                        reviewCount: business.review_count
                    };
                });
            } 
        });
        
    }

};
