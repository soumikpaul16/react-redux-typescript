export interface ISearchEntitles {
    productDetails: IProductDetails[],
    categoryDetails: ICategoryDetails
  }

export interface IProductDetails {
    net: string,
    uom: string,
    gross: string,
    hub_id: number,
    item_id: string,
    item_name: string,
    item_slug: string,
    item_tags: string,
    item_type: number,
    pr_weight: string,
    item_image: string,
    item_price: number,
    category_id: number,
    item_discount: number,
    productPricing: object,
    categoryDetails: object,
    merchandise_name: string,
    productInventory: IProductInventory,
    productMerchantdising: object,
    item_price_after_discount: number
}

export interface ICategoryDetails {
    id: number,
    slug: string,
    cat_name: string
}

export interface IProductInventory{
    next_available_by: string,
}