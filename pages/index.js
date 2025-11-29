import BlogPost from "@/components/blog/BlogPost"
import Layout from "@/components/layout/Layout"
import BlogSidebar from "@/components/sections/BlogSidebar"
import MargueePost from "@/components/sections/MargueePost"
import Newsletter1 from "@/components/sections/Newsletter1"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    {/* featured post area start */}
                    <div className="featured-post-area pt-60">
                        <div className="container">
                            <div className="row ta-column-gap-30 mt-none-30">
                                <div className="col-xl-3 col-md-6 order-2 order-xl-1 mt-30">
                                    <BlogPost showItem={2} showStart={12} showEnd={14} style={2} desc col="mb-30" lastChild="mb-0" />
                                </div>
                                <div className="col-xl-6 col-lg-12 order-1 order-xl-2 mt-30">
                                    <BlogPost showItem={1} showStart={32} showEnd={33} style={3} col="mb-30" />
                                </div>
                                <div className="col-xl-3 col-md-6 order-3 mt-30">
                                    <BlogPost showItem={2} showStart={14} showEnd={16} style={2} desc col="mb-30" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* featured post area end */}
                    {/* recnt post slider start */}
                    <div className="rcp-area pt-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="ta-section-wrapper ta-border-top ta-border-top__dark pt-20 pb-40">
                                        <div className="row">
                                            <div className="col-md-8 align-self-center">
                                                <div className="ta-section-heading">
                                                    <h2 className="ta-title ta-title--mid">Trending Post</h2>
                                                </div>
                                            </div>
                                            <div className="col-md-4 d-flex align-self-center justify-content-end">
                                                <Link href="#0" className="ta-inline-btn ta-inline-btn__themebg">More Post <i className="far fa-long-arrow-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-none-30">
                                <BlogPost showItem={4} showStart={0} showEnd={4} style={2} desc col="col-xl-3 col-lg-6 col-md-6 col-sm-6 mt-30" />
                            </div>
                        </div>
                    </div>
                    {/* recnt post slider end */}
                    {/* moving cats start */}
                    <MargueePost cls="pt-115" />
                    {/* moving cats end */}
                    {/* featured post area start */}
                    <div className="featured-post-area pt-80 pb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="ta-section-wrapper ta-border-top ta-border-top__dark pt-20 pb-40">
                                        <div className="row">
                                            <div className="col-md-8 align-self-center">
                                                <div className="ta-section-heading">
                                                    <h2 className="ta-title ta-title--mid">Tech News</h2>
                                                </div>
                                            </div>
                                            <div className="col-md-4 d-flex align-self-center justify-content-end">
                                                <Link href="#0" className="ta-inline-btn ta-inline-btn__themebg">More Post <i className="far fa-long-arrow-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row ta-column-gap-30 mt-none-30">
                                <div className="col-xl-8 mt-30">
                                    <BlogPost showItem={1} showStart={31} showEnd={32} style={3} desc />
                                </div>
                                <div className="col-xl-4 mt-30">
                                    <BlogPost showItem={5} showStart={0} showEnd={5} style={11} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* featured post area end */}
                    {/* newsletter start */}
                    <Newsletter1 />
                    {/* newsletter end */}
                    {/* blog area start */}
                    <div className="ta-blog-area pt-100 pb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="ta-section-wrapper ta-border-top ta-border-top__dark pt-20 pb-40">
                                                <div className="row">
                                                    <div className="col-md-8 align-self-center">
                                                        <div className="ta-section-heading">
                                                            <h2 className="ta-title ta-title--mid">Hand-Picked News</h2>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 d-flex align-self-center justify-content-end">
                                                        <Link href="#0" className="ta-inline-btn ta-inline-btn__themebg">More Post <i className="far fa-long-arrow-right" /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row ta-column-gap-30 mt-none-30">
                                        <BlogPost showItem={8} showStart={0} showEnd={12} style={1} formatIcon showPagination col="col-xl-6 col-lg-6 mt-30" />
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <BlogSidebar />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* blog area end */}
                </div>

            </Layout>
        </>
    )
}