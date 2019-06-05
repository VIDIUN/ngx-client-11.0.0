/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaServerNode } from './KalturaServerNode';
/**
 * @record
 */
export function KalturaConferenceServerNodeArgs() { }
/** @type {?|undefined} */
KalturaConferenceServerNodeArgs.prototype.serviceBaseUrl;
var KalturaConferenceServerNode = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaConferenceServerNode, _super);
    function KalturaConferenceServerNode(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaConferenceServerNode.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaConferenceServerNode' },
            serviceBaseUrl: { type: 's' }
        });
        return result;
    };
    return KalturaConferenceServerNode;
}(KalturaServerNode));
export { KalturaConferenceServerNode };
if (false) {
    /** @type {?} */
    KalturaConferenceServerNode.prototype.serviceBaseUrl;
}
typesMappingStorage['KalturaConferenceServerNode'] = KalturaConferenceServerNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbmZlcmVuY2VTZXJ2ZXJOb2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQ29uZmVyZW5jZVNlcnZlck5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHFCQUFxQixDQUFDOzs7Ozs7O0FBTy9FLElBQUE7SUFBaUQsdURBQWlCO0lBSTlELHFDQUFZLElBQXVDO2VBRS9DLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsa0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNkJBQTZCLEVBQUU7WUFDaEYsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN0QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3NDQTdCTDtFQVNpRCxpQkFBaUIsRUFxQmpFLENBQUE7QUFyQkQsdUNBcUJDOzs7OztBQUVELG1CQUFtQixDQUFDLDZCQUE2QixDQUFDLEdBQUcsMkJBQTJCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVNlcnZlck5vZGUsIEthbHR1cmFTZXJ2ZXJOb2RlQXJncyB9IGZyb20gJy4vS2FsdHVyYVNlcnZlck5vZGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDb25mZXJlbmNlU2VydmVyTm9kZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYVNlcnZlck5vZGVBcmdzIHtcbiAgICBzZXJ2aWNlQmFzZVVybD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDb25mZXJlbmNlU2VydmVyTm9kZSBleHRlbmRzIEthbHR1cmFTZXJ2ZXJOb2RlIHtcblxuICAgIHNlcnZpY2VCYXNlVXJsIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQ29uZmVyZW5jZVNlcnZlck5vZGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUNvbmZlcmVuY2VTZXJ2ZXJOb2RlJyB9LFxuXHRcdFx0XHRzZXJ2aWNlQmFzZVVybCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQ29uZmVyZW5jZVNlcnZlck5vZGUnXSA9IEthbHR1cmFDb25mZXJlbmNlU2VydmVyTm9kZTsiXX0=