import PropTypes from "prop-types";
import "./frame-component.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className="ictwotone-verified-parent">
      <div className="ictwotone-verified" />
      <img className="vector-icon1" loading="lazy" alt="" src="/vector-1.svg" />
      <div className="frame-wrapper1">
        <div className="vector-container">
          <img
            className="vector-icon2"
            loading="lazy"
            alt=""
            src="/vector-2.svg"
          />
          <div className="frame-wrapper2">
            <div className="frame-parent2">
              <div className="vector-frame">
                <img
                  className="vector-icon3"
                  loading="lazy"
                  alt=""
                  src="/vector-3.svg"
                />
              </div>
              <div className="ellipse-group">
                <div className="ellipse-div" />
                <div className="message-icon">
                  <img
                    className="messager-message-chat-icon-1"
                    loading="lazy"
                    alt=""
                    src="/7156611-messager-message-chat-icon-1.svg"
                  />
                  <b className="message-count">6</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-child1" />
      <div className="image-gallery">
        <div className="image-container">
          <div className="image-container-inner">
            <div className="whatsapp-image-2024-08-27-at-9-parent">
              <img
                className="whatsapp-image-2024-08-27-at-9"
                loading="lazy"
                alt=""
                src="/whatsapp-image-20240827-at-92710-pm@2x.png"
              />
              <div className="ellipse-container">
                <div className="frame-child2" />
                <h2 className="h2">+</h2>
              </div>
            </div>
          </div>
          <img
            className="whatsapp-image-2024-08-27-at-91"
            loading="lazy"
            alt=""
            src="/whatsapp-image-20240827-at-93329-pm@2x.png"
          />
          <div className="double-image">
            <img
              className="whatsapp-image-2024-08-27-at-92"
              loading="lazy"
              alt=""
              src="/whatsapp-image-20240827-at-93654-pm@2x.png"
            />
            <div className="whatsapp-image-2024-08-27-at-93" />
          </div>
          <div className="multi-image">
            <img
              className="whatsapp-image-2024-08-27-at-94"
              loading="lazy"
              alt=""
              src="/whatsapp-image-20240827-at-93654-pm1@2x.png"
            />
            <img
              className="whatsapp-image-2024-08-27-at-95"
              alt=""
              src="/whatsapp-image-20240827-at-93654-pm1-1@2x.png"
            />
          </div>
        </div>
        <div className="frame-parent3">
          <div className="your-story-wrapper">
            <b className="your-story">Your story</b>
          </div>
          <div className="unlucky-soul-wrapper">
            <b className="unlucky-soul">unlucky_soul</b>
          </div>
          <div className="ownerarmas-wrapper">
            <b className="ownerarmas">ownerarmas</b>
          </div>
          <div className="candy-soul-ammukutty-wrapper">
            <b className="candy-soul-ammukutty">candy_soul_ammukutty</b>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
