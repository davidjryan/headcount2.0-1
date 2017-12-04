export default class DistrictRepository {
  constructor(data) {
    this.data = this.mutateData(data)
    this.findAllMatches = this.findAllMatches.bind(this)
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
    if (!searchTerm) {
      return undefined
    }

    searchTerm = searchTerm.toUpperCase()

    return searchTerm in this.data ? this.data[searchTerm] : undefined
  }

  findAllMatches(searchTerm) {
    if (!searchTerm) {
      const districtData = Object.keys(this.data).map(key => {
        return {
          location: key,
          data: this.data[key]
        }
      });
      return districtData;
    }

    searchTerm = searchTerm.toUpperCase()

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
