/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaTvinciDistributionTag } from './KalturaTvinciDistributionTag';
import { KalturaConfigurableDistributionProfile } from './KalturaConfigurableDistributionProfile';
/**
 * @record
 */
export function KalturaTvinciDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaTvinciDistributionProfileArgs.prototype.ingestUrl;
/** @type {?|undefined} */
KalturaTvinciDistributionProfileArgs.prototype.username;
/** @type {?|undefined} */
KalturaTvinciDistributionProfileArgs.prototype.password;
/** @type {?|undefined} */
KalturaTvinciDistributionProfileArgs.prototype.tags;
/** @type {?|undefined} */
KalturaTvinciDistributionProfileArgs.prototype.xsltFile;
export class KalturaTvinciDistributionProfile extends KalturaConfigurableDistributionProfile {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.tags === 'undefined')
            this.tags = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaTvinciDistributionProfile' },
            ingestUrl: { type: 's' },
            username: { type: 's' },
            password: { type: 's' },
            tags: { type: 'a', subTypeConstructor: KalturaTvinciDistributionTag, subType: 'KalturaTvinciDistributionTag' },
            xsltFile: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaTvinciDistributionProfile.prototype.ingestUrl;
    /** @type {?} */
    KalturaTvinciDistributionProfile.prototype.username;
    /** @type {?} */
    KalturaTvinciDistributionProfile.prototype.password;
    /** @type {?} */
    KalturaTvinciDistributionProfile.prototype.tags;
    /** @type {?} */
    KalturaTvinciDistributionProfile.prototype.xsltFile;
}
typesMappingStorage['KalturaTvinciDistributionProfile'] = KalturaTvinciDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVR2aW5jaURpc3RyaWJ1dGlvblByb2ZpbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFUdmluY2lEaXN0cmlidXRpb25Qcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHNDQUFzQyxFQUE4QyxNQUFNLDBDQUEwQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFXOUksTUFBTSx1Q0FBd0MsU0FBUSxzQ0FBc0M7Ozs7SUFReEYsWUFBWSxJQUE0QztRQUVwRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7S0FDeEQ7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGtDQUFrQyxFQUFFO1lBQ3JGLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsNEJBQTRCLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1lBQ2xILFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDaEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsa0NBQWtDLENBQUMsR0FBRyxnQ0FBZ0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVHZpbmNpRGlzdHJpYnV0aW9uVGFnIH0gZnJvbSAnLi9LYWx0dXJhVHZpbmNpRGlzdHJpYnV0aW9uVGFnJztcbmltcG9ydCB7IEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlLCBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVHZpbmNpRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzIHtcbiAgICBpbmdlc3RVcmw/IDogc3RyaW5nO1xuXHR1c2VybmFtZT8gOiBzdHJpbmc7XG5cdHBhc3N3b3JkPyA6IHN0cmluZztcblx0dGFncz8gOiBLYWx0dXJhVHZpbmNpRGlzdHJpYnV0aW9uVGFnW107XG5cdHhzbHRGaWxlPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVR2aW5jaURpc3RyaWJ1dGlvblByb2ZpbGUgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSB7XG5cbiAgICBpbmdlc3RVcmwgOiBzdHJpbmc7XG5cdHVzZXJuYW1lIDogc3RyaW5nO1xuXHRwYXNzd29yZCA6IHN0cmluZztcblx0dGFncyA6IEthbHR1cmFUdmluY2lEaXN0cmlidXRpb25UYWdbXTtcblx0eHNsdEZpbGUgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFUdmluY2lEaXN0cmlidXRpb25Qcm9maWxlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMudGFncyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMudGFncyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFUdmluY2lEaXN0cmlidXRpb25Qcm9maWxlJyB9LFxuXHRcdFx0XHRpbmdlc3RVcmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXNlcm5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFzc3dvcmQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGFncyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVR2aW5jaURpc3RyaWJ1dGlvblRhZywgc3ViVHlwZSA6ICdLYWx0dXJhVHZpbmNpRGlzdHJpYnV0aW9uVGFnJyB9LFxuXHRcdFx0XHR4c2x0RmlsZSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVHZpbmNpRGlzdHJpYnV0aW9uUHJvZmlsZSddID0gS2FsdHVyYVR2aW5jaURpc3RyaWJ1dGlvblByb2ZpbGU7Il19