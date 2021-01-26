import React from 'react';

function CustomerReview({customers, rating}) {
    return (
        <div className="customer_review" style={{marginBottom: 20}}>
            <h2 style={{fontSize: 24, fontWeight: 700}}>Customer reviews</h2>
            <div>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: 10}}>
                    <div className="star_outside" id="return_inside"><div className="star_inside" style={{width: `${(rating / 5)*100}%`}} /></div>
                    <span style={{fontSize: 16, paddingLeft: 20}}><span id="index_stars">{rating}</span> out of 5</span>
                </div>
                <div className="box_stars_rv" id="recommendedStar"><div className="box_stars_rv">
                    <table>
                        <tbody><tr><td className="customer_rv_tb"><span>5 stars</span></td>
                            <td>
                                <div className="a-metter" role="progressbar">
                                    <div className="a-metter-bar" style={{width: `${((customers?.filter((e) => e?.rating === 5).length)/customers?.length)*100}%`}} />
                                </div>
                            </td>
                            <td className="customer_rv_tb"><span className="percent_rv">{Math.round(((customers?.filter((e) => e?.rating === 5).length)/customers?.length)*100)}%</span></td>
                        </tr></tbody></table>
                </div>
                    <div className="box_stars_rv">
                        <table>
                            <tbody><tr><td className="customer_rv_tb"><span>4 stars</span></td>
                                <td>
                                    <div className="a-metter" role="progressbar">
                                        <div className="a-metter-bar" style={{width: `${((customers?.filter((e) => e?.rating === 4).length)/customers?.length)*100}%`}} />
                                    </div>
                                </td>
                                <td className="customer_rv_tb"><span className="percent_rv">{Math.round(((customers?.filter((e) => e?.rating === 4).length)/customers?.length)*100)}%</span></td>
                            </tr></tbody></table>
                    </div>
                    <div className="box_stars_rv">
                        <table>
                            <tbody><tr><td className="customer_rv_tb"><span>3 stars</span></td>
                                <td>
                                    <div className="a-metter" role="progressbar">
                                        <div className="a-metter-bar" style={{width: `${((customers?.filter((e) => e?.rating === 3).length)/customers?.length)*100}%`}} />
                                    </div>
                                </td>
                                <td className="customer_rv_tb"><span className="percent_rv">{Math.round(((customers?.filter((e) => e?.rating === 3).length)/customers?.length)*100)}%</span></td>
                            </tr></tbody></table>
                    </div>
                    <div className="box_stars_rv">
                        <table>
                            <tbody>
                            <tr>
                                <td className="customer_rv_tb"><span>2 stars</span></td>
                                <td>
                                    <div className="a-metter" role="progressbar">
                                        <div className="a-metter-bar" style={{width: `${((customers?.filter((e) => e?.rating === 2).length)/customers?.length)*100}%`}} />
                                    </div>
                                </td>
                                <td className="customer_rv_tb"><span className="percent_rv">{Math.round(((customers?.filter((e) => e?.rating === 2).length)/customers?.length)*100)}%</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="box_stars_rv">
                        <table>
                            <tbody>
                            <tr>
                                <td className="customer_rv_tb"><span>1 star</span></td>
                                <td>
                                    <div className="a-metter" role="progressbar">
                                        <div className="a-metter-bar" style={{width: `${((customers?.filter((e) => e?.rating === 1).length)/customers?.length)*100}%`}} />
                                    </div>
                                </td>
                                <td className="customer_rv_tb"><span className="percent_rv">{Math.round(((customers?.filter((e) => e?.rating === 1).length)/customers?.length)*100)}%</span></td>
                            </tr></tbody></table>
                    </div>
                </div>
                <div className="calc_star">
                    <p>To calculate the overall star rating and percentage breakdown by star, we don’t use a simple average. Instead, our system considers things like how recent a review is and if the reviewer bought the item on Amazon. It also analyzes reviews to verify trustworthiness.</p>
                </div>
            </div>
        </div>
    )
}

export default CustomerReview;