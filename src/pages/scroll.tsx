import {observer} from "mobx-react-lite";
import React, {useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {xStore} from "../js/xStore";


const Scroll: React.FC = () => {
    const [hasMore, setHasMore] = useState<boolean>(true)

    const fetchMoreData = (): void => {
        if (xStore.items.length >= 500) {
            setHasMore(false);
            return;
        }
        setTimeout(() => {
            xStore.addItems(Array.from({length: 10}))
        }, 1000);
    };

    return (
        <InfiniteScroll
            dataLength={xStore.items.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            height={'100vh'}
            endMessage={
                <p style={{textAlign: "center"}}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
        >
            {xStore.items.map((i, index) => (
                <div
                    className='post'
                    style={{
                        backgroundImage: `url("https://picsum.photos/200/${240 + index}")`,
                    }}
                    key={index}
                >
                    <div className="post__footer">
                        <div>
                            <div className="post__avatar"/>
                        </div>
                        <div>
                            <h5>Name</h5>
                            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi ducimus harum porro quas
                                quibusdam rerum sed similique tempora tempore vitae?</h5>
                        </div>
                    </div>
                </div>
            ))}
        </InfiniteScroll>
    );
}

export default observer(Scroll);