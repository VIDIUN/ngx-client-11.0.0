/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPlayReadyAnalogVideoOPId } from './KalturaPlayReadyAnalogVideoOPId';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaPlayReadyAnalogVideoOPIdHolderArgs() { }
/** @type {?|undefined} */
KalturaPlayReadyAnalogVideoOPIdHolderArgs.prototype.type;
var KalturaPlayReadyAnalogVideoOPIdHolder = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaPlayReadyAnalogVideoOPIdHolder, _super);
    function KalturaPlayReadyAnalogVideoOPIdHolder(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaPlayReadyAnalogVideoOPIdHolder.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPlayReadyAnalogVideoOPIdHolder' },
            type: { type: 'es', subTypeConstructor: KalturaPlayReadyAnalogVideoOPId, subType: 'KalturaPlayReadyAnalogVideoOPId' }
        });
        return result;
    };
    return KalturaPlayReadyAnalogVideoOPIdHolder;
}(KalturaObjectBase));
export { KalturaPlayReadyAnalogVideoOPIdHolder };
if (false) {
    /** @type {?} */
    KalturaPlayReadyAnalogVideoOPIdHolder.prototype.type;
}
typesMappingStorage['KalturaPlayReadyAnalogVideoOPIdHolder'] = KalturaPlayReadyAnalogVideoOPIdHolder;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBsYXlSZWFkeUFuYWxvZ1ZpZGVvT1BJZEhvbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVBsYXlSZWFkeUFuYWxvZ1ZpZGVvT1BJZEhvbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7QUFPbEYsSUFBQTtJQUEyRCxpRUFBaUI7SUFJeEUsK0NBQVksSUFBaUQ7ZUFFekQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyw0REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1Q0FBdUMsRUFBRTtZQUMxRixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLCtCQUErQixFQUFFLE9BQU8sRUFBRyxpQ0FBaUMsRUFBRTtTQUNoSCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2dEQTlCTDtFQVUyRCxpQkFBaUIsRUFxQjNFLENBQUE7QUFyQkQsaURBcUJDOzs7OztBQUVELG1CQUFtQixDQUFDLHVDQUF1QyxDQUFDLEdBQUcscUNBQXFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVBsYXlSZWFkeUFuYWxvZ1ZpZGVvT1BJZCB9IGZyb20gJy4vS2FsdHVyYVBsYXlSZWFkeUFuYWxvZ1ZpZGVvT1BJZCc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVBsYXlSZWFkeUFuYWxvZ1ZpZGVvT1BJZEhvbGRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICB0eXBlPyA6IEthbHR1cmFQbGF5UmVhZHlBbmFsb2dWaWRlb09QSWQ7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFQbGF5UmVhZHlBbmFsb2dWaWRlb09QSWRIb2xkZXIgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICB0eXBlIDogS2FsdHVyYVBsYXlSZWFkeUFuYWxvZ1ZpZGVvT1BJZDtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVBsYXlSZWFkeUFuYWxvZ1ZpZGVvT1BJZEhvbGRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUGxheVJlYWR5QW5hbG9nVmlkZW9PUElkSG9sZGVyJyB9LFxuXHRcdFx0XHR0eXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBsYXlSZWFkeUFuYWxvZ1ZpZGVvT1BJZCwgc3ViVHlwZSA6ICdLYWx0dXJhUGxheVJlYWR5QW5hbG9nVmlkZW9PUElkJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUGxheVJlYWR5QW5hbG9nVmlkZW9PUElkSG9sZGVyJ10gPSBLYWx0dXJhUGxheVJlYWR5QW5hbG9nVmlkZW9PUElkSG9sZGVyOyJdfQ==