import Layout from "@/components/layout/Layout"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import data from "../../util/blog.json"
import BlogDetailsArticle from "@/components/sections/BlogDetailsArticle"
import Comments from "@/components/sections/Comments"
import BlogSidebar from "@/components/sections/BlogSidebar"

export default function BlogDetails() {
    let Router = useRouter()
    const [blogPost, setBlogPost] = useState(null)
    const { id } = Router.query

    useEffect(() => {
        setBlogPost(data.find((data) => data.id == id))
    }, [id])

    return (
        <>
            {blogPost && (
                <>
                    <Layout footerStyle={2} breadcrumbTitle={blogPost.title}>
                        <div className="ta-blog-area pt-70 pb-100">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-8">
                                        <div className="ta-blog-details-wrapper ta-blog-details-wrapper__prev">
                                            <div className="shape shape__1"><img src="/assets/img/shape/featerd-shape-1.webp" alt="" /></div>
                                            <div className="shape shape__2"><img src="/assets/img/shape/featerd-shape-2.webp" alt="" /></div>
                                            <div className="shape shape__3"><img src="/assets/img/shape/featerd-shape-3.webp" alt="" /></div>
                                            <BlogDetailsArticle blogPost={blogPost} />
                                            <Comments />
                                        </div>
                                    </div>
                                    <div className="col-xl-4">
                                        <BlogSidebar />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Layout>
                </>
            )}
        </>
    )
}