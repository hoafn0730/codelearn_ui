import classnames from 'classnames/bind';

import styles from './Presentation.module.scss';
import VideoPlayer from '../VideoPlayer';
import Image from '../Image';

const cx = classnames.bind(styles);

function Presentation({ imageUrl, videoUrl }) {
    return (
        <div className={cx('wrapper')}>
            {imageUrl && <Image className={cx('img')} src={imageUrl} />}
            {videoUrl && <VideoPlayer />}
        </div>
    );
}

export default Presentation;