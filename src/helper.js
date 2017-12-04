export default class DistrictRepository {
  constructor(data) {
    this.data = this.mutateData(data)
  }

  mutateData(data) {
    const arrayToObject = data.reduce((obj, district) => {
      const upperLocation = district.Location.toUpperCase()
      const roundedData = Math.round(1000*(district.Data))/1000 || 0

      if (upperLocation in obj) {
        obj[upperLocation][district.TimeFrame] = roundedData
      } else {
        obj[upperLocation] = {
                              location: upperLocation,
                              [district.TimeFrame]: roundedData
        }
      }
      return obj
    }, {})

  return arrayToObject
  }

  findByName(searchTerm) {
    searchTerm = searchTerm.toUpperCase()
    if (searchTerm) {
      return searchTerm in this.data ? this.data[searchTerm] : undefined
    } else {
      return undefined
    }
  }

  findAllMatches(searchTerm) {
    searchTerm = searchTerm.toUpperCase()
    if(!searchTerm) {
      const districtData = Object.keys(this.data).map(key => {
        return {
          location: key,
          data: this.data[key]
        }
      });
      return districtData;
    }
    const matchedKeys = Object.keys(this.data).filter(key => key.includes(searchTerm));
    const matches = matchedKeys.map(matchedKey => {
      return {
        location: matchedKey,
        data: this.data[matchedKey]
      }
    });
    return matches;
  }
}
