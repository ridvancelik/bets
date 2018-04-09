import React, {Component} from 'react';

class Timeline extends Component {

    render() {
        return (
            <div>
                <div className="row wrapper border-bottom white-bg page-heading">
                    <div className="col-lg-10">
                        <h2>Grup Paylaşımları</h2>
                        <ol className="breadcrumb">
                            <li className="active">
                                <strong>Grup Paylaşımları</strong>
                            </li>
                        </ol>
                    </div>
                    <div className="col-lg-2">

                    </div>
                </div>
                <div className='wrapper wrapper-content'>

                    <div className="row animated fadeInRight">
                        <div className="col-lg-12">
                            <div className="ibox float-e-margins">
                                <div className="ibox-title">
                                    <h5>Son Paylaşımlar</h5>

                                    <div ibox-tools/>
                                </div>

                                <div className="ibox-content inspinia-timeline">

                                    <div className="timeline-item">
                                        <div className="row">
                                            <div className="col-xs-3 date">
                                                <i className="fa fa-briefcase"/>
                                                6:00 am
                                                <br/>
                                                <small className="text-navy">2 hour ago</small>
                                            </div>
                                            <div className="col-xs-7 content no-top-border">
                                                <p className="m-b-xs"><strong>Meeting</strong></p>

                                                <p>Conference on the sales results for the previous year. Monica please examine sales
                                                    trends in
                                                    marketing and products. Below please find the current status of the
                                                    sale.</p>

                                                <p>
                                                    <bar-chart data="main.BarChart2.data" options="main.BarChart2.options"/>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="row">
                                            <div className="col-xs-3 date">
                                                <span className="label label-danger">Live</span>
                                                7:00 am
                                                <br/>
                                                <small className="text-navy">3 hour ago</small>
                                            </div>
                                            <div className="col-xs-7 content">
                                                <p className="m-b-xs"><strong>Send documents to Mike</strong></p>

                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                                    has been the
                                                    industry's standard dummy text ever since.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="row">
                                            <div className="col-xs-3 date">
                                                <i className="fa fa-coffee"/>
                                                8:00 am
                                                <br/>
                                            </div>
                                            <div className="col-xs-7 content">
                                                <p className="m-b-xs"><strong>Coffee Break</strong></p>

                                                <p>
                                                    Go to shop and find some products.
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                                    has been
                                                    the
                                                    industry's.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="row">
                                            <div className="col-xs-3 date">
                                                <i className="fa fa-phone"/>
                                                11:00 am
                                                <br/>
                                                <small className="text-navy">21 hour ago</small>
                                            </div>
                                            <div className="col-xs-7 content">
                                                <p className="m-b-xs"><strong>Phone with Jeronimo</strong></p>

                                                <p>
                                                    Lorem Ipsum has been the industry's standard dummy text ever since.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="row">
                                            <div className="col-xs-3 date">
                                                <i className="fa fa-user-md"/>
                                                09:00 pm
                                                <br/>
                                                <small>21 hour ago</small>
                                            </div>
                                            <div className="col-xs-7 content">
                                                <p className="m-b-xs"><strong>Go to the doctor dr Smith</strong></p>

                                                <p>
                                                    Find some issue and go to doctor.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="row">
                                            <div className="col-xs-3 date">
                                                <i className="fa fa-user-md"/>
                                                11:10 pm
                                            </div>
                                            <div className="col-xs-7 content">
                                                <p className="m-b-xs"><strong>Chat with Sandra</strong></p>

                                                <p>
                                                    Lorem Ipsum has been the industry's standard dummy text ever since.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="row">
                                            <div className="col-xs-3 date">
                                                <i className="fa fa-comments"/>
                                                12:50 pm
                                                <br/>
                                                <small className="text-navy">48 hour ago</small>
                                            </div>
                                            <div className="col-xs-7 content">
                                                <p className="m-b-xs"><strong>Chat with Monica and Sandra</strong></p>

                                                <p>
                                                    Web sites still in their infancy. Various versions have evolved over the years,
                                                    sometimes by
                                                    accident,
                                                    sometimes on purpose (injected humour and the like).
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="row">
                                            <div className="col-xs-3 date">
                                                <i className="fa fa-phone"/>
                                                08:50 pm
                                                <br/>
                                                <small className="text-navy">68 hour ago</small>
                                            </div>
                                            <div className="col-xs-7 content">
                                                <p className="m-b-xs"><strong>Phone to James</strong></p>

                                                <p>
                                                    Various versions have evolved over the years, sometimes by accident, sometimes on
                                                    purpose
                                                    (injected
                                                    humour and the like).
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="row">
                                            <div className="col-xs-3 date">
                                                <i className="fa fa-file-text"/>
                                                7:00 am
                                                <br/>
                                                <small className="text-navy">3 hour ago</small>
                                            </div>
                                            <div className="col-xs-7 content">
                                                <p className="m-b-xs"><strong>Send documents to Mike</strong></p>

                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                                    has been the
                                                    industry's standard dummy text ever since.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Timeline