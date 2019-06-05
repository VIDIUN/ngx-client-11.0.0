/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaGenericDistributionProfileAction } from './KalturaGenericDistributionProfileAction';
import { KalturaDistributionProfile } from './KalturaDistributionProfile';
/**
 * @record
 */
export function KalturaGenericDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaGenericDistributionProfileArgs.prototype.genericProviderId;
/** @type {?|undefined} */
KalturaGenericDistributionProfileArgs.prototype.submitAction;
/** @type {?|undefined} */
KalturaGenericDistributionProfileArgs.prototype.updateAction;
/** @type {?|undefined} */
KalturaGenericDistributionProfileArgs.prototype.deleteAction;
/** @type {?|undefined} */
KalturaGenericDistributionProfileArgs.prototype.fetchReportAction;
/** @type {?|undefined} */
KalturaGenericDistributionProfileArgs.prototype.updateRequiredEntryFields;
/** @type {?|undefined} */
KalturaGenericDistributionProfileArgs.prototype.updateRequiredMetadataXPaths;
var KalturaGenericDistributionProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaGenericDistributionProfile, _super);
    function KalturaGenericDistributionProfile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaGenericDistributionProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaGenericDistributionProfile' },
            genericProviderId: { type: 'n' },
            submitAction: { type: 'o', subTypeConstructor: KalturaGenericDistributionProfileAction, subType: 'KalturaGenericDistributionProfileAction' },
            updateAction: { type: 'o', subTypeConstructor: KalturaGenericDistributionProfileAction, subType: 'KalturaGenericDistributionProfileAction' },
            deleteAction: { type: 'o', subTypeConstructor: KalturaGenericDistributionProfileAction, subType: 'KalturaGenericDistributionProfileAction' },
            fetchReportAction: { type: 'o', subTypeConstructor: KalturaGenericDistributionProfileAction, subType: 'KalturaGenericDistributionProfileAction' },
            updateRequiredEntryFields: { type: 's' },
            updateRequiredMetadataXPaths: { type: 's' }
        });
        return result;
    };
    return KalturaGenericDistributionProfile;
}(KalturaDistributionProfile));
export { KalturaGenericDistributionProfile };
if (false) {
    /** @type {?} */
    KalturaGenericDistributionProfile.prototype.genericProviderId;
    /** @type {?} */
    KalturaGenericDistributionProfile.prototype.submitAction;
    /** @type {?} */
    KalturaGenericDistributionProfile.prototype.updateAction;
    /** @type {?} */
    KalturaGenericDistributionProfile.prototype.deleteAction;
    /** @type {?} */
    KalturaGenericDistributionProfile.prototype.fetchReportAction;
    /** @type {?} */
    KalturaGenericDistributionProfile.prototype.updateRequiredEntryFields;
    /** @type {?} */
    KalturaGenericDistributionProfile.prototype.updateRequiredMetadataXPaths;
}
typesMappingStorage['KalturaGenericDistributionProfile'] = KalturaGenericDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDcEcsT0FBTyxFQUFFLDBCQUEwQixFQUFrQyxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYTFHLElBQUE7SUFBdUQsNkRBQTBCO0lBVTdFLDJDQUFZLElBQTZDO2VBRXJELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsd0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUNBQW1DLEVBQUU7WUFDdEYsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsdUNBQXVDLEVBQUUsT0FBTyxFQUFHLHlDQUF5QyxFQUFFO1lBQ2hKLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsdUNBQXVDLEVBQUUsT0FBTyxFQUFHLHlDQUF5QyxFQUFFO1lBQ2hKLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsdUNBQXVDLEVBQUUsT0FBTyxFQUFHLHlDQUF5QyxFQUFFO1lBQ2hKLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyx1Q0FBdUMsRUFBRSxPQUFPLEVBQUcseUNBQXlDLEVBQUU7WUFDckoseUJBQXlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFDLDRCQUE0QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNwQyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzRDQWhETDtFQWdCdUQsMEJBQTBCLEVBaUNoRixDQUFBO0FBakNELDZDQWlDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxtQ0FBbUMsQ0FBQyxHQUFHLGlDQUFpQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvZmlsZUFjdGlvbiB9IGZyb20gJy4vS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlQWN0aW9uJztcbmltcG9ydCB7IEthbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlLCBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb2ZpbGVBcmdzICBleHRlbmRzIEthbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlQXJncyB7XG4gICAgZ2VuZXJpY1Byb3ZpZGVySWQ/IDogbnVtYmVyO1xuXHRzdWJtaXRBY3Rpb24/IDogS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlQWN0aW9uO1xuXHR1cGRhdGVBY3Rpb24/IDogS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlQWN0aW9uO1xuXHRkZWxldGVBY3Rpb24/IDogS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlQWN0aW9uO1xuXHRmZXRjaFJlcG9ydEFjdGlvbj8gOiBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb2ZpbGVBY3Rpb247XG5cdHVwZGF0ZVJlcXVpcmVkRW50cnlGaWVsZHM/IDogc3RyaW5nO1xuXHR1cGRhdGVSZXF1aXJlZE1ldGFkYXRhWFBhdGhzPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlIGV4dGVuZHMgS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGUge1xuXG4gICAgZ2VuZXJpY1Byb3ZpZGVySWQgOiBudW1iZXI7XG5cdHN1Ym1pdEFjdGlvbiA6IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvZmlsZUFjdGlvbjtcblx0dXBkYXRlQWN0aW9uIDogS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlQWN0aW9uO1xuXHRkZWxldGVBY3Rpb24gOiBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb2ZpbGVBY3Rpb247XG5cdGZldGNoUmVwb3J0QWN0aW9uIDogS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlQWN0aW9uO1xuXHR1cGRhdGVSZXF1aXJlZEVudHJ5RmllbGRzIDogc3RyaW5nO1xuXHR1cGRhdGVSZXF1aXJlZE1ldGFkYXRhWFBhdGhzIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb2ZpbGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlJyB9LFxuXHRcdFx0XHRnZW5lcmljUHJvdmlkZXJJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzdWJtaXRBY3Rpb24gOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvZmlsZUFjdGlvbiwgc3ViVHlwZSA6ICdLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb2ZpbGVBY3Rpb24nIH0sXG5cdFx0XHRcdHVwZGF0ZUFjdGlvbiA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlQWN0aW9uLCBzdWJUeXBlIDogJ0thbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvZmlsZUFjdGlvbicgfSxcblx0XHRcdFx0ZGVsZXRlQWN0aW9uIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb2ZpbGVBY3Rpb24sIHN1YlR5cGUgOiAnS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlQWN0aW9uJyB9LFxuXHRcdFx0XHRmZXRjaFJlcG9ydEFjdGlvbiA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlQWN0aW9uLCBzdWJUeXBlIDogJ0thbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvZmlsZUFjdGlvbicgfSxcblx0XHRcdFx0dXBkYXRlUmVxdWlyZWRFbnRyeUZpZWxkcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1cGRhdGVSZXF1aXJlZE1ldGFkYXRhWFBhdGhzIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvZmlsZSddID0gS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlOyJdfQ==