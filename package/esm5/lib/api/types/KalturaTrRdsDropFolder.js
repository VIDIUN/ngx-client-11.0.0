/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaSftpDropFolder } from './KalturaSftpDropFolder';
/**
 * @record
 */
export function KalturaTrRdsDropFolderArgs() { }
/** @type {?|undefined} */
KalturaTrRdsDropFolderArgs.prototype.syncMetadataProfile;
/** @type {?|undefined} */
KalturaTrRdsDropFolderArgs.prototype.targetMetadataProfile;
var KalturaTrRdsDropFolder = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaTrRdsDropFolder, _super);
    function KalturaTrRdsDropFolder(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaTrRdsDropFolder.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaTrRdsDropFolder' },
            syncMetadataProfile: { type: 'n' },
            targetMetadataProfile: { type: 'n' }
        });
        return result;
    };
    return KalturaTrRdsDropFolder;
}(KalturaSftpDropFolder));
export { KalturaTrRdsDropFolder };
if (false) {
    /** @type {?} */
    KalturaTrRdsDropFolder.prototype.syncMetadataProfile;
    /** @type {?} */
    KalturaTrRdsDropFolder.prototype.targetMetadataProfile;
}
typesMappingStorage['KalturaTrRdsDropFolder'] = KalturaTrRdsDropFolder;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVRyUmRzRHJvcEZvbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVRyUmRzRHJvcEZvbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQTZCLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7OztBQVEzRixJQUFBO0lBQTRDLGtEQUFxQjtJQUs3RCxnQ0FBWSxJQUFrQztlQUUxQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDZDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzNFLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyxxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDN0IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtpQ0FoQ0w7RUFVNEMscUJBQXFCLEVBdUJoRSxDQUFBO0FBdkJELGtDQXVCQzs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHdCQUF3QixDQUFDLEdBQUcsc0JBQXNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVNmdHBEcm9wRm9sZGVyLCBLYWx0dXJhU2Z0cERyb3BGb2xkZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhU2Z0cERyb3BGb2xkZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFUclJkc0Ryb3BGb2xkZXJBcmdzICBleHRlbmRzIEthbHR1cmFTZnRwRHJvcEZvbGRlckFyZ3Mge1xuICAgIHN5bmNNZXRhZGF0YVByb2ZpbGU/IDogbnVtYmVyO1xuXHR0YXJnZXRNZXRhZGF0YVByb2ZpbGU/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVHJSZHNEcm9wRm9sZGVyIGV4dGVuZHMgS2FsdHVyYVNmdHBEcm9wRm9sZGVyIHtcblxuICAgIHN5bmNNZXRhZGF0YVByb2ZpbGUgOiBudW1iZXI7XG5cdHRhcmdldE1ldGFkYXRhUHJvZmlsZSA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVRyUmRzRHJvcEZvbGRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVHJSZHNEcm9wRm9sZGVyJyB9LFxuXHRcdFx0XHRzeW5jTWV0YWRhdGFQcm9maWxlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHRhcmdldE1ldGFkYXRhUHJvZmlsZSA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVHJSZHNEcm9wRm9sZGVyJ10gPSBLYWx0dXJhVHJSZHNEcm9wRm9sZGVyOyJdfQ==