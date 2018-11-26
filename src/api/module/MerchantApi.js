import {VoucherGeneratorAxios} from '@/module/HttpModule';
import {setPagination} from '@/util/pagination'
export default {

  async getMerchantApi(pagination) {
    let queryParams = setPagination(pagination)
    return await VoucherGeneratorAxios.get("/v1/rest/merchant" + queryParams).then(async (merchants) => {
      return await merchants.data
    }).catch((error) => {
      throw error
    })
  },

  async getMerchantByMerchantIdApi(merchantId) {
    return await VoucherGeneratorAxios.get("/v1/rest/merchant/" + merchantId).then(async (merchant) => {
      return await merchant.data
    }).catch((error) => {
      throw error
    })
  },

  async createMerchantApi(merchant) {
    return await VoucherGeneratorAxios.post("/v1/rest/merchant", merchant).then(async (merchant) => {
      return await merchant.data
    }).catch((error) => {
      throw error
    })
  },

  async updateMerchantApi(merchant) {
    return await VoucherGeneratorAxios.put("/v1/rest/merchant/" + merchant.id, merchant).then(async (merchant) => {
      return await merchant.data
    }).catch((error) => {
      throw error
    })
  },

  async activateMerchantApi(merchant) {
    return await VoucherGeneratorAxios.put("/v1/rest/merchant/activate/" + merchant.id, merchant).then(async (merchant) => {
      return await merchant.data
    }).catch((error) => {
      throw error
    })
  },

  async blockMerchantApi(merchant) {
    return await VoucherGeneratorAxios.put("/v1/rest/merchant/block/" + merchant.id, merchant).then(async (merchant) => {
      return await merchant.data
    }).catch((error) => {
      throw error
    })
  },

  async deleteMerchantApi(merchant) {
    return await VoucherGeneratorAxios.delete("/v1/rest/merchant/" + merchant.id, merchant).then(async (merchant) => {
      return await merchant.data
    }).catch((error) => {
      throw error
    })
  }
}
