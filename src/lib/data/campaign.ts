
export type Campaign = {
  name:string
  tag_cats:{
    [cat:string]:string[]
  }
  uid:string
  user_tags:string[]
  users:string[]
  
  era:string
}