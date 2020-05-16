import sha1 from './b64_sha1'
import sha256 from './b64_sha256'
export default function getHash(string, shaType = 'sha1') {
    return shaType === 'sha1' ?
        sha1(string) :
        sha256(string)
}