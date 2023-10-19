class PeerService {
    constructor() {
    this.peer = new RTCPeerConnection({
        iceServers: [
        {
            urls: ["stun:stun.l.google.com:19302", "stun:global.stun.twilio.com:3478"],
        },
        ],
    });
    }

    async getOffer() {
    try {
        const offer = await this.peer.createOffer();
        await this.peer.setLocalDescription(offer);
        return offer;
    } catch (error) {
        console.error("Error creating offer:", error);
        throw error; // Optionally re-throw the error for higher-level handling
    }
    }

    async getAnswer(offer) {
    try {
        await this.peer.setRemoteDescription(new RTCSessionDescription(offer));
        const ans = await this.peer.createAnswer();
        await this.peer.setLocalDescription(ans);
        return ans;
    } catch (error) {
        console.error("Error creating answer:", error);
        throw error; // Optionally re-throw the error for higher-level handling
    }
    }

    async setLocalDescription(ans) {
    try {
        await this.peer.setRemoteDescription(new RTCSessionDescription(ans));
    } catch (error) {
        console.error("Error setting remote description:", error);
        throw error; // Optionally re-throw the error for higher-level handling
    }
    }
}

export default new PeerService();
