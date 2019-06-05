/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaDistributionAction } from './KalturaDistributionAction';
import { KalturaFileRequest } from '../kaltura-file-request';
/**
 * @record
 */
export function EntryDistributionServeSentDataActionArgs() { }
/** @type {?} */
EntryDistributionServeSentDataActionArgs.prototype.id;
/** @type {?} */
EntryDistributionServeSentDataActionArgs.prototype.actionType;
/**
 * Build request payload for service 'entryDistribution' action 'serveSentData'.
 *
 * Usage: Serves entry distribution sent data
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'entryDistribution' action 'serveSentData'.
 *
 * Usage: Serves entry distribution sent data
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
EntryDistributionServeSentDataAction = /** @class */ (function (_super) {
    tslib_1.__extends(EntryDistributionServeSentDataAction, _super);
    function EntryDistributionServeSentDataAction(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    EntryDistributionServeSentDataAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'contentdistribution_entrydistribution' },
            action: { type: 'c', default: 'serveSentData' },
            id: { type: 'n' },
            actionType: { type: 'en', subTypeConstructor: KalturaDistributionAction, subType: 'KalturaDistributionAction' }
        });
        return result;
    };
    return EntryDistributionServeSentDataAction;
}(KalturaFileRequest));
/**
 * Build request payload for service 'entryDistribution' action 'serveSentData'.
 *
 * Usage: Serves entry distribution sent data
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export { EntryDistributionServeSentDataAction };
if (false) {
    /** @type {?} */
    EntryDistributionServeSentDataAction.prototype.id;
    /** @type {?} */
    EntryDistributionServeSentDataAction.prototype.actionType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50cnlEaXN0cmlidXRpb25TZXJ2ZVNlbnREYXRhQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9FbnRyeURpc3RyaWJ1dGlvblNlcnZlU2VudERhdGFBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQTBCLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXJGOzs7Ozs7OztBQUFBO0lBQTBELGdFQUFrQjtJQUt4RSw4Q0FBWSxJQUErQztlQUV2RCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDJEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVDQUF1QyxFQUFFO1lBQ3ZGLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtZQUNsRCxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcseUJBQXlCLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1NBQzFHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7K0NBM0NMO0VBb0IwRCxrQkFBa0IsRUF3QjNFLENBQUE7Ozs7Ozs7OztBQXhCRCxnREF3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5cbmltcG9ydCB7IEthbHR1cmFEaXN0cmlidXRpb25BY3Rpb24gfSBmcm9tICcuL0thbHR1cmFEaXN0cmlidXRpb25BY3Rpb24nO1xuaW1wb3J0IHsgS2FsdHVyYUZpbGVSZXF1ZXN0LCBLYWx0dXJhRmlsZVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1maWxlLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVudHJ5RGlzdHJpYnV0aW9uU2VydmVTZW50RGF0YUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYUZpbGVSZXF1ZXN0QXJncyB7XG4gICAgaWQgOiBudW1iZXI7XG5cdGFjdGlvblR5cGUgOiBLYWx0dXJhRGlzdHJpYnV0aW9uQWN0aW9uO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZW50cnlEaXN0cmlidXRpb24nIGFjdGlvbiAnc2VydmVTZW50RGF0YScuXG4gKlxuICogVXNhZ2U6IFNlcnZlcyBlbnRyeSBkaXN0cmlidXRpb24gc2VudCBkYXRhXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgeyB1cmw6IHN0cmluZyB9XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBFbnRyeURpc3RyaWJ1dGlvblNlcnZlU2VudERhdGFBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhRmlsZVJlcXVlc3Qge1xuXG4gICAgaWQgOiBudW1iZXI7XG5cdGFjdGlvblR5cGUgOiBLYWx0dXJhRGlzdHJpYnV0aW9uQWN0aW9uO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IEVudHJ5RGlzdHJpYnV0aW9uU2VydmVTZW50RGF0YUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdjb250ZW50ZGlzdHJpYnV0aW9uX2VudHJ5ZGlzdHJpYnV0aW9uJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc2VydmVTZW50RGF0YScgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0YWN0aW9uVHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEaXN0cmlidXRpb25BY3Rpb24sIHN1YlR5cGUgOiAnS2FsdHVyYURpc3RyaWJ1dGlvbkFjdGlvbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19